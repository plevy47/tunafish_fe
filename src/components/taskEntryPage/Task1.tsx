import React from 'react';

const Task1 = (props: {
  taskName: string
}) => {
  const { taskName } = props;
  return (
    <div style={{
      display: 'flex',
      marginTop: 7,
      width: '50%',
    }}
    >
      <div style={{ display: 'flex' }}>
        <div>
          <span>{taskName}</span>
        </div>
      </div>
    </div>
  );
};

export default Task1;
