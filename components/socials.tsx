import { ContactsQueryResult } from "@/sanity/types"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"

export default function Socials({
  contacts
}: {
  contacts: ContactsQueryResult
}) {
  return (
    <div className="flex gap-4 justify-end">
      {contacts.map((contact) => (
        <HoverCard key={contact._id}>
          <HoverCardTrigger href={contact.linkToProfile || ''}>
            <Image
              alt={contact.favicon?.alt || ''}
              src={contact.favicon?.url || ''}
              width={40}
              height={40}
              className="bg-white rounded-md p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit flex flex-col gap-2">
            {contact.username}
            <p className="text-gray-400 text-xs">{contact.linkToProfile}</p>
          </HoverCardContent>
        </HoverCard>
      )
      )}
    </div>
  )
}