// Add shared interfaces here
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}


export interface PostProps {
  id?: number;
  title: string;
  content: string;
  userId: number;
}
