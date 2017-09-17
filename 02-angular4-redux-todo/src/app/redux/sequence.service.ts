export class SequenceService {

  private id;

  constructor() {
    this.id = this.reset();
  }

  public reset(to: number = 1): number {
    return this.id = to;
  }

  public next(): number {
    return this.id ++;
  }
}

export const seq = new SequenceService();
