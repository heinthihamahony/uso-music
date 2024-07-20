import { ContactFamilyMember } from "./contact-family-member/page";
import { PersonalDetail } from "./personal-detail/page";

export function Information() {
  return (
    <>
      <div className="mx-4 ">
        <PersonalDetail />
        <ContactFamilyMember />
      </div>
    </>
  );
}
