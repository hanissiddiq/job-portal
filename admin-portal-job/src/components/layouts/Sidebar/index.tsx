// import { Sidebar } from 'lucide-react';
'use client';
import { Button } from '@/components/ui/button';
import React, {FC} from 'react';
import { FcHome } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcKindle } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FaRightFromBracket } from "react-icons/fa6";
import { useRouter } from 'next/dist/client/components/navigation';

interface SidebarProps {
}

const Sidebar: FC<SidebarProps> = ({}) => {
    const router = useRouter();
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-2 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div className="space-y-3">                    
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary"
                    onClick={() => router.push('/')}>
                        <FcHome className='mr-2 text-lg'/>
                        Home
                    </Button>
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary">
                        <FcVoicePresentation className='mr-2 text-lg'/>
                        Messages
                    </Button>
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary">
                        <FcDepartment className='mr-2 text-lg'/>
                        Company Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary">
                        <FcDocument className='mr-2 text-lg'/>
                        All Applicants
                    </Button>
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary"
                    onClick={() => router.push('/job-listings')}>
                        <FcKindle className='mr-2 text-lg'/>
                        Job Listing
                    </Button>
                    <Button variant="ghost" className="w-full justify-start  hover:text-primary">
                        <FcCalendar className='mr-2 text-lg'/>
                        My Schedule
                    </Button>
                </div>
            </div>            
        </div>
        <div className="sapce-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className='mb-2 px-2 text-lg font-semibold'>Setting</h2>
                    <div className="space-y-3">                    
                        <Button variant="ghost" className="w-full justify-start  hover:text-primary">
                            <FcEngineering className='mr-2 text-lg'/>
                            Settings
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-100">
                            <FaRightFromBracket className='mr-2 text-lg'/>
                            Logout
                        </Button>
                        
                    </div>                                        
                </div>
        </div>
      
    </div>
  );
}

export default Sidebar;
