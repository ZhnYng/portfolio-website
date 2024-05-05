import { getContacts } from "@/sanity/sanity-utils";
import Socials from "./socials";

export const Footer = async () => {
  const contacts = await getContacts();

  return (
    <footer className="mt-28 px-6 md:px-20 py-6 w-full">
      <div className="mx-auto flex w-full justify-between items-center flex-col flex-col-reverse md:flex-row gap-3">
        <p>&copy; {new Date().getFullYear()} Lim Zhen Yang</p>
        <div className="flex gap-4 justify-end">
          <Socials contacts={contacts} />
        </div>
      </div>
    </footer>
  );
};