import React from 'react';
import { Eye, UserX, UserCheck } from 'lucide-react';
import {Link} from 'react-router-dom';

interface ActionMenuProps {
  userId: any;
  onClose: () => void;
}

export default function ActionMenu({ userId, onClose }: ActionMenuProps = { userId: '', onClose: () => {} }) {
  return (
    <div className="absolute right-0 top-full z-50 mt-1 w-40 rounded-lg bg-white p-2 shadow-lg">
      <div className="space-y-1">
        <Link
          to={`/users/${userId}`}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          <Eye className="h-4 w-4" />
          View Details
        </Link>
        
        <button
          onClick={() => {
            // Handle blacklist action
            onClose();
          }}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          <UserX className="h-4 w-4" />
          Blacklist User
        </button>
        
        <button
          onClick={() => {
            // Handle activate action
            onClose();
          }}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          <UserCheck className="h-4 w-4" />
          Activate User
        </button>
      </div>
    </div>
  );
}