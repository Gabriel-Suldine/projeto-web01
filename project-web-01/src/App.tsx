import { BaseLayout } from "./layout/baseLayout"
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from "./theme/themeProvider";
import { ChangeEvent, useEffect, useState } from "react";
import { ContactCard } from "./components/ContactCard";
import { ContactList } from "./components/ContactList";
import { getContacts } from "./services/api";
import { Contact } from "./types";
import { CircularProgress, TextField } from "@mui/material";

const [search, setSearch] = useState("");
const [isLoading, setIsLoading] = useState<Boolean>(false);
const [contacts, setContacts] = useState<Contact[]>([]);

useEffect(() => {
  async function listContacts() {
    setIsLoading(true);
    setContacts(await getContacts());
    setIsLoading(false);
  }
  listContacts(); 
 
}
const filterContacts = (contact: Contact) => {
  return contact.name.first.toLowerCase().includes(search.toLowerCase());
};


  function App() {

    function setSearch(value: string) {
      throw new Error("Function not implemented.");
    }

    return <>
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de perfis">
        <TextField
        fullWidth
        variant='outlined'
        label='Pesquisar'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ContactList>
          {contacts.filter(filterContacts).map((contact) => {
            return (
              <ContactCard key={contact.login.uuid} contactData={contact} />
            );
          })}
        </ContactList>
      )}

        </BaseLayout>
      </Theme>
    </>

  }


