
export class WindowCustom{
    constructor(
      public height: string = '',
      public id: string ='',
      public layoutId: string = '', 
      public left: string = '',
      public top: string = '',
      public width: string= '',
      public zIndex: string ='',
    ){}
  };

  export class Layout{
    constructor(
      public id: number,
      public name: string,
      public windows: WindowCustom[], 
    ){}
  };

