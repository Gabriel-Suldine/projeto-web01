import { ChangeEvent, useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { getContacts } from "../../services/api";
import { Contact } from "../../types";
import { BaseLayout } from "../../layout/baseLayout";
import { CircularProgress, TextField } from "@mui/material";

export function Contacts() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const filterContacts = (contact: Contact) => {
    return contact.name.first.toLowerCase().includes(search.toLowerCase());
  };

  useEffect(() => {
    async function listContacts() {
      setIsLoading(true);
      setContacts(await getContacts());
      setIsLoading(false);
    }
    listContacts();
  }, []);
  return (
    <BaseLayout appBarTitle='Agenda de Contatos'>
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
  );
}