interface BusinessPartner {
    name: string;
    credit: number;
  }
  
  interface Identity {
    id: number;
    name: string;
  }
  
  interface Contact {
    email: string;
    phone: number;
  }
  
  type Employee = Identity & Contact;
  type Customer = BusinessPartner & Contact;
  
  const e: Employee = {
    email: 'manzitre',
    name: 'manzi',
    phone: 78836329,
    id:1,
  }