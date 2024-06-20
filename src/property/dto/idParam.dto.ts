import { IsInt, IsPositive } from 'class-validator';

export class IdParam {
  @IsInt()
  @IsPositive()
  id: number;
}
