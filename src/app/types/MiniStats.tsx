type MiniStats = {
  competition: string;
  total_appearance: number;
  total_goal: number;
 };
 
 export type PlayerStats = {
   id: number;
   name: string;
   stats: MiniStats[]
 } 