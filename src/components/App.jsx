import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Toaster } from 'react-hot-toast';


export const App =() => {
  return (
    <div>
      <Toaster/>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter/>
      <List/>
    </div>
  )

}