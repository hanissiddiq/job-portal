// import { Header } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import React, {FC} from 'react';


interface HeaderProps {
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
        <div className='text-2xl'>
            <div>Company</div>
            <div className='font-semibold'>Twitter</div>
        </div>
        <div>
            <Button className='text-white py-3 px-6'>
                <PlusIcon className='mr-1 m-2 h-4'/>
                Post a Job</Button>
        </div>
    </div>
  );
}

export default Header;