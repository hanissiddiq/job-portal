"use client";
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, {FC, use} from 'react';


interface HeaderProps {
}

const Header: FC<HeaderProps> = ({}) => {
  const router =useRouter();
  const navCraeateJob = () => router.push('/post-a-job');
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
        <div className='text-2xl'>
            <div>Company</div>
            <div className='font-semibold'>PT. Husada Niaga</div>
        </div>
        <div>
            <Button onClick={navCraeateJob} className='text-white py-3 px-6'>
                <PlusIcon className='mr-1 m-2 h-4'/>
                Post a Job</Button>
        </div>
    </div>
  );
}

export default Header;