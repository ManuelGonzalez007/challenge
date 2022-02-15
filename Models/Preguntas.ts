export class Preguntas {
  id: number;
  title: string;
  description: string;
  enabled: boolean;
  constructor(
    id: number,
    title: string,
    description: string,
    enabled: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.enabled = enabled;
  }
}
