import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  //   @Length(2, 6, { message: 'error on length' })
  name: string;

  @IsString()
  @Length(6, 10, { groups: ['create'] })
  @Length(2, 11, { groups: ['update'] })
  description: string;

  @IsInt()
  @IsPositive()
  area: number;
}
