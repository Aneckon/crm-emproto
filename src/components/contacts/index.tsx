import React, { useState } from 'react';
import { Header, Table } from '..';

import './contacts.scss';

export const Contacts = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="contacts">
      <Header search={search} setSearch={setSearch} title="Total Contacts" />
      <div className="contacts__content">
        <div className="container">
          <Table search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};
