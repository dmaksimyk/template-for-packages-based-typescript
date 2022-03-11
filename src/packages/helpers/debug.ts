// Types
type TDebug = (msg: string, data: any) => void;

// Function
const debug: TDebug = (msg, data) => console.log(msg, data);

export default debug;
