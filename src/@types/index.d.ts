declare module Common {
  interface ProjectType {
    title: string;
    date: string;
    link: string;
  }

  interface CareerType {
    title: string;
    date: string;
  }
  interface EducationType {
    title: string;
    description: string;
    date: string;
  }

  interface ContactType {
    title: string;
    link?: string;
  }
  interface RecommendationType {
    title: string;
    link: string;
    description: string;
  }
}
