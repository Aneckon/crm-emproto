import { createSlice } from '@reduxjs/toolkit';

interface contactsState {
  contactsList: {
    id: number;
    name: string;
    designation: string;
    company: string;
    industry: string;
    email: string;
    phoneNumber: string;
    country: string;
    activeCheched: boolean;
  }[];
}

const initialState: contactsState = {
  contactsList: [
    {
      id: 1,
      name: 'Teja Vardhan',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: 'ramesh123@gmail.com',
      phoneNumber: '+76748228111441',
      country: 'IND',
      activeCheched: false,
    },
    {
      id: 2,
      name: 'Ramesh Director',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: '_Karthik34@gmailcom',
      phoneNumber: '+94048116111241',
      country: 'UA',
      activeCheched: false,
    },
    {
      id: 3,
      name: 'Sane',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: 'sanju@gmaiLcom',
      phoneNumber: '+84324353495324',
      country: 'UA',
      activeCheched: false,
    },
    {
      id: 4,
      name: 'Technologies',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: 'dhanreddy6s@gmail.com',
      phoneNumber: '+49075685012313',
      country: 'US',
      activeCheched: false,
    },
    {
      id: 5,
      name: 'VP',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: '6gfdgdfa@gmail.com',
      phoneNumber: '+01832143543453',
      country: 'UA',
      activeCheched: false,
    },
    {
      id: 6,
      name: 'Emproto',
      designation: 'VP of Technologis',
      company: 'Emproto Technologies',
      industry: 'Hospital & healthcare',
      email: 'emproto@gmail.com',
      phoneNumber: '+90558341432391',
      country: 'UA',
      activeCheched: false,
    },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactsDelete: (state, action) => {
      state.contactsList = state.contactsList.filter((item) => item.id !== action.payload);
    },
    contactsAddChecked: (state, action) => {
      const index = state.contactsList.findIndex((todo) => todo.id === action.payload.id);
      state.contactsList[index].activeCheched = action.payload.activeCheched;
    },
  },
});

export const { contactsDelete, contactsAddChecked } = contactsSlice.actions;
export default contactsSlice.reducer;
