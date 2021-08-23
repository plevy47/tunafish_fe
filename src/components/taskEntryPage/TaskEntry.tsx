import React from 'react';
import {
  PrimaryButton, TextField, Dropdown, IDropdownOption,
} from '@fluentui/react/lib';
import Task from './Task1';
import NavigationBar from '../header/NavigationBar';
// import { SendRequest } from '../../database/SendRequest';
// import { endpoints } from '../../database/endpoint';

const tables: IDropdownOption[] = [
  { key: 'Tasks', text: 'Tasks' }];

const TaskEntry = () => {
  const [text, setText] = React.useState('');
  const [list] = React.useState<string[]>([]);

  React.useEffect(() => {
    setText('');
  }, [list]);
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div style={{
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
      >
        <TextField
          type="text"
          placeholder="Enter Task"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />

        <Dropdown
          placeholder="Task Category"
          options={tables}
        />

        <PrimaryButton>
          Create!
        </PrimaryButton>
        <div>
          <div>

            <Task taskName={text} />
          </div>

        </div>
      </div>
    </>
  );
};

export default TaskEntry;

// onClick={() => {
//     SendRequest(endpoints.create, 'POST').then((response) => {
//         console.log(response);
//         console.log(endpoints.create);
//     });
// }}
