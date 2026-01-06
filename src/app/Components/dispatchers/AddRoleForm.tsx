'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface Permission {
  all: boolean;
  index: boolean;
  create: boolean;
  edit: boolean;
  trash?: boolean;
  restore?: boolean;
  delete: boolean;
}

interface Permissions {
  attachments: Permission;
  users: Permission;
  roles: Omit<Permission, 'trash' | 'restore'>;
  categories: Omit<Permission, 'trash' | 'restore'>;
  tags: Permission;
}

export const AddRoleForm = () => {
  const router = useRouter();
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState<Permissions>({
    attachments: {
      all: false,
      index: false,
      create: false,
      edit: false,
      trash: false,
      restore: false,
      delete: false,
    },
    users: {
      all: false,
      index: false,
      create: false,
      edit: false,
      trash: false,
      restore: false,
      delete: false,
    },
    roles: {
      all: false,
      index: false,
      create: false,
      edit: false,
      delete: false,
    },
    categories: {
      all: false,
      index: false,
      create: false,
      edit: false,
      delete: false,
    },
    tags: {
      all: false,
      index: false,
      create: false,
      edit: false,
      trash: false,
      restore: false,
      delete: false,
    },
  });

  const handlePermissionChange = (
    category: keyof Permissions,
    permission: string
  ) => {
    setPermissions((prev) => {
      const categoryPerms = prev[category] as any;
      const newValue = !categoryPerms[permission];

      // If "All" is checked, check all permissions
      if (permission === 'all') {
        const updatedCategory = Object.keys(categoryPerms).reduce(
          (acc, key) => ({
            ...acc,
            [key]: newValue,
          }),
          {} as any
        );
        return {
          ...prev,
          [category]: updatedCategory,
        };
      }

      // Update the specific permission
      const updatedCategory = {
        ...categoryPerms,
        [permission]: newValue,
      };

      // Check if all permissions are checked, then check "All"
      const allChecked = Object.keys(updatedCategory)
        .filter((key) => key !== 'all')
        .every((key) => updatedCategory[key]);

      updatedCategory.all = allChecked;

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(permissions).every((cat: any) => cat.all);
    const newValue = !allSelected;

    const updatedPermissions = Object.keys(permissions).reduce(
      (acc, category) => {
        const categoryPerms = permissions[category as keyof Permissions] as any;
        const updatedCategory = Object.keys(categoryPerms).reduce(
          (catAcc, perm) => ({
            ...catAcc,
            [perm]: newValue,
          }),
          {} as any
        );
        return {
          ...acc,
          [category]: updatedCategory,
        };
      },
      {} as Permissions
    );

    setPermissions(updatedPermissions);
  };

  const handleSave = (redirect: boolean = false) => {
    if (!roleName.trim()) {
      alert('Please enter a role name');
      return;
    }

    // Create new role object
    const newRole = {
      id: Date.now().toString(),
      name: roleName,
      status: 'active' as const,
      createdAt: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      permissions: permissions,
    };

    // Get existing roles from localStorage
    const existingRoles = JSON.parse(localStorage.getItem('roles') || '[]');

    // Add new role
    existingRoles.push(newRole);

    // Save back to localStorage
    localStorage.setItem('roles', JSON.stringify(existingRoles));

    if (redirect) {
      router.push('/users/roles-permissions');
    } else {
      // Reset form
      setRoleName('');
      setPermissions({
        attachments: {
          all: false,
          index: false,
          create: false,
          edit: false,
          trash: false,
          restore: false,
          delete: false,
        },
        users: {
          all: false,
          index: false,
          create: false,
          edit: false,
          trash: false,
          restore: false,
          delete: false,
        },
        roles: {
          all: false,
          index: false,
          create: false,
          edit: false,
          delete: false,
        },
        categories: {
          all: false,
          index: false,
          create: false,
          edit: false,
          delete: false,
        },
        tags: {
          all: false,
          index: false,
          create: false,
          edit: false,
          trash: false,
          restore: false,
          delete: false,
        },
      });

      // Show success message
      alert('Role saved successfully!');

      // Refresh the page
      window.location.reload();
    }
  };

  const PermissionCheckbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded border-gray-300"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );

  return (
    <div className="bg-white dark:bg-[#161c24] dark:border-gray-500 border rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6 dark:text-gray-300">Add Role</h2>

      <div className="space-y-6 max-w-4xl">
        <div>
          <Input
            label="Name"
            name="roleName"
            placeholder="Enter Role Name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Permissions<span className="text-red-500">*</span>
          </label>

          <div className="border rounded-lg p-4 dark:bg-[#161c24] bg-gray-50 max-h-96 overflow-y-auto w-full">
  {/* Horizontal Scroll Wrapper */}
  <div className="w-full overflow-x-auto">
    <div className="min-w-[600px]"> 
      {/* this ensures table-like content gets full width and scrolls */}
      
      {/* Select All Permissions */}
      <div className="mb-4 pb-4 border-b">
        <button
          type="button"
          onClick={handleSelectAll}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Select All Permissions:
        </button>
      </div>

      {/* Attachments */}
      <div className="mb-6">
        <div className="font-medium text-gray-800 mb-3 dark:text-gray-300">Attachments:</div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 ml-4">
          <PermissionCheckbox label="All" checked={permissions.attachments.all} onChange={() => handlePermissionChange('attachments', 'all')} />
          <PermissionCheckbox label="Index" checked={permissions.attachments.index} onChange={() => handlePermissionChange('attachments', 'index')} />
          <PermissionCheckbox label="Create" checked={permissions.attachments.create} onChange={() => handlePermissionChange('attachments', 'create')} />
          <PermissionCheckbox label="Edit" checked={permissions.attachments.edit} onChange={() => handlePermissionChange('attachments', 'edit')} />
          <PermissionCheckbox label="Trash" checked={permissions.attachments.trash || false} onChange={() => handlePermissionChange('attachments', 'trash')} />
          <PermissionCheckbox label="Restore" checked={permissions.attachments.restore || false} onChange={() => handlePermissionChange('attachments', 'restore')} />
          <PermissionCheckbox label="Delete" checked={permissions.attachments.delete} onChange={() => handlePermissionChange('attachments', 'delete')} />
        </div>
      </div>

      {/* Users */}
      <div className="mb-6">
        <div className="font-medium text-gray-800 mb-3 dark:text-gray-300 ">Users:</div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 ml-4">
          <PermissionCheckbox label="All" checked={permissions.users.all} onChange={() => handlePermissionChange('users', 'all')} />
          <PermissionCheckbox label="Index" checked={permissions.users.index} onChange={() => handlePermissionChange('users', 'index')} />
          <PermissionCheckbox label="Create" checked={permissions.users.create} onChange={() => handlePermissionChange('users', 'create')} />
          <PermissionCheckbox label="Edit" checked={permissions.users.edit} onChange={() => handlePermissionChange('users', 'edit')} />
          <PermissionCheckbox label="Trash" checked={permissions.users.trash || false} onChange={() => handlePermissionChange('users', 'trash')} />
          <PermissionCheckbox label="Restore" checked={permissions.users.restore || false} onChange={() => handlePermissionChange('users', 'restore')} />
          <PermissionCheckbox label="Delete" checked={permissions.users.delete} onChange={() => handlePermissionChange('users', 'delete')} />
        </div>
      </div>

      {/* Roles */}
      <div className="mb-6">
        <div className="font-medium text-gray-800 mb-3 dark:text-gray-300">Roles:</div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 ml-4">
          <PermissionCheckbox label="All" checked={permissions.roles.all} onChange={() => handlePermissionChange('roles', 'all')} />
          <PermissionCheckbox label="Index" checked={permissions.roles.index} onChange={() => handlePermissionChange('roles', 'index')} />
          <PermissionCheckbox label="Create" checked={permissions.roles.create} onChange={() => handlePermissionChange('roles', 'create')} />
          <PermissionCheckbox label="Edit" checked={permissions.roles.edit} onChange={() => handlePermissionChange('roles', 'edit')} />
          <PermissionCheckbox label="Delete" checked={permissions.roles.delete} onChange={() => handlePermissionChange('roles', 'delete')} />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <div className="font-medium text-gray-800 mb-3 dark:text-gray-300">Categories:</div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 ml-4">
          <PermissionCheckbox label="All" checked={permissions.categories.all} onChange={() => handlePermissionChange('categories', 'all')} />
          <PermissionCheckbox label="Index" checked={permissions.categories.index} onChange={() => handlePermissionChange('categories', 'index')} />
          <PermissionCheckbox label="Create" checked={permissions.categories.create} onChange={() => handlePermissionChange('categories', 'create')} />
          <PermissionCheckbox label="Edit" checked={permissions.categories.edit} onChange={() => handlePermissionChange('categories', 'edit')} />
          <PermissionCheckbox label="Delete" checked={permissions.categories.delete} onChange={() => handlePermissionChange('categories', 'delete')} />
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <div className="font-medium text-gray-800 mb-3 dark:text-gray-300">Tags:</div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 ml-4">
          <PermissionCheckbox label="All" checked={permissions.tags.all} onChange={() => handlePermissionChange('tags', 'all')} />
          <PermissionCheckbox label="Index" checked={permissions.tags.index} onChange={() => handlePermissionChange('tags', 'index')} />
          <PermissionCheckbox label="Create" checked={permissions.tags.create} onChange={() => handlePermissionChange('tags', 'create')} />
          <PermissionCheckbox label="Edit" checked={permissions.tags.edit} onChange={() => handlePermissionChange('tags', 'edit')} />
          <PermissionCheckbox label="Trash" checked={permissions.tags.trash || false} onChange={() => handlePermissionChange('tags', 'trash')} />
          <PermissionCheckbox label="Restore" checked={permissions.tags.restore || false} onChange={() => handlePermissionChange('tags', 'restore')} />
          <PermissionCheckbox label="Delete" checked={permissions.tags.delete} onChange={() => handlePermissionChange('tags', 'delete')} />
        </div>
      </div>

    </div>
  </div>
</div>

        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <Button
            variant="success"
            onClick={() => handleSave(false)}
            className="flex items-center justify-center gap-2text-center bg-blue-600 hover:bg-blue-700"
          > Save
          </Button>
          <Button
            variant="success"
            onClick={() => handleSave(true)}
            className="flex items-center justify-center gap-2 text-center bg-blue-600 hover:bg-blue-700"
          > Save and Exit
          </Button>
        </div>
      </div>
    </div>
  );
};