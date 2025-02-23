import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';
import { useState } from 'react';
import { toast } from "sonner"

type SearchFormProps = {
    userName: string
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
    const [text, setText] = useState(userName)
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text === '') {
            toast('Please enter a name')
            return;
        }
        setUserName(text)
    }
    return (
        <form onSubmit={handleSearch} className='flex items-center gap-x-2 w-full lg:w-1/3 mb-8'>
            <Label htmlFor='name' className='sr-only'>Name</Label>
            <Input id='name' placeholder='Search for a user' value={text} onChange={(e) => setText(e.target.value)} className='flex-grow bg-background' />
            <Button type='submit'>Search</Button>
        </form>
    )
}
export default SearchForm