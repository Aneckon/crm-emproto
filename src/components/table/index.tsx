import React, { useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { contactsAddChecked, contactsDelete } from '../../redux/slice/contacrs';

import './table.scss';

interface TableProps {
  search: string;
  setSearch: (search: string) => void;
}

export const Table: FC<TableProps> = ({ search, setSearch }) => {
  const dispatch = useAppDispatch();
  const contactsList = useAppSelector((state) => state.contactsReducer.contactsList);

  const [checkedAll, setCheckedAll] = useState(false);

  const handleChangeCheckAll = () => {
    setCheckedAll(!checkedAll);
  };

  const handleChangeCheck = (id: number, activeCheched: boolean) => {
    dispatch(contactsAddChecked({ id, activeCheched: !activeCheched }));
  };

  const handleDelete = (id: number) => {
    dispatch(contactsDelete(id));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <td>
            <input type="checkbox" onChange={handleChangeCheckAll} checked={checkedAll} /> Name
          </td>
          <td>Designation</td>
          <td>Company</td>
          <td>Industry</td>
          <td>Email</td>
          <td>Phone number</td>
          <td>Country</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {contactsList
          .filter((item) => {
            const name = (
              item.name +
              item.email +
              item.phoneNumber +
              item.country +
              item.company +
              item.industry
            ).toLocaleLowerCase();
            return (
              name.includes(search.toLocaleLowerCase()) || name.includes(search.toLocaleLowerCase())
            );
          })
          .map(
            (item: {
              id: number;
              name: string;
              designation: string;
              company: string;
              industry: string;
              email: string;
              phoneNumber: string;
              country: string;
              activeCheched: boolean;
            }) => (
              <tr key={item.id}>
                <td>
                  <input
                    name={item.name}
                    type="checkbox"
                    onChange={() => handleChangeCheck(item.id, item.activeCheched)}
                    checked={item.activeCheched || checkedAll}
                  />
                  {item.name}
                </td>
                <td>{item.designation}</td>
                <td>{item.company}</td>
                <td>{item.industry}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.country}</td>
                <td>
                  <img src="assets/edit.svg" alt="" />
                  <img onClick={() => handleDelete(item.id)} src="assets/delete.svg" alt="" />
                </td>
              </tr>
            ),
          )}
      </tbody>
    </table>
  );
};
