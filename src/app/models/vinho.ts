export class Vinho {

    constructor(
        public id?: number,
        public nome?: string,
        public uva?: string,
        public classificacao?: string,
        public anoSafra?: number,
        public fabricante?: string,
        public paisOrigem?:string) {}
}
