import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4">
        <Button>Click me</Button>
        <Button variant='outline' size='lg'>
          Click me
        </Button>
        <Button variant='destructive' size='sm'>
          Click me
        </Button>
      </div>
    </div>
  )
};
export default App;