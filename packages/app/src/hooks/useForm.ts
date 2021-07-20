import { useCallback, useReducer } from "react";

export default function useForm(initialstate: any = {}) {
  const reducer = useCallback((state: any, action: any) => {
    switch(action.type) {
      case 'ONCHANGE':
        return {...state, ...action.payload};
      
      default:
        return state;
    }
  }, []);
  const [data, dispatch] = useReducer(reducer, initialstate);

  const onChange = useCallback((e) => { dispatch({ type: 'ONCHANGE', payload: { [e.target.name]: e.target.value } }) }, []);
  
  return { data, onChange };
}