/* 
  entities에는 실제 데이터베이스의 모델을 만들어야함
  여기서는 가짜 데이터베이스를 만들 것
*/

export class Movie {
  id: number;
  title: string;
  year: number;
  generes: string[];
}
