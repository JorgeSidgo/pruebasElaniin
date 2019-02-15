export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password?: string;
  etc_token?: string;
  created_at?: string;
  updated_at?: string;
  role_id: number;
  desc?: string;
}
