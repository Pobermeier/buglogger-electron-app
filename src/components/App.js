import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';

const App = () => {
  const [logs, setLogs] = useState([]);

  const addItem = (item) => {
    item._id = Math.floor(Math.random() * 9000) + 10000;
    item.created = new Date().toString();
    setLogs([...logs, item]);
  };

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
