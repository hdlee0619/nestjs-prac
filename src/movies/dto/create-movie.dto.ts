import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  // 유효성 검사
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly generes: string[];
}
