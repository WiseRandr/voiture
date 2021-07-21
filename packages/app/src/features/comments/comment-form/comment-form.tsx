import { useMutation } from "@apollo/client";
import { PropsWithChildren, useCallback } from "react";
import { COMMENT_VOITURE } from "src/graphql/comment/comment.mutation";
import { COMMENTS } from "src/graphql/comment/comment.query";
import useForm from "src/hooks/useForm";

export default function CommentForm({ voitureid }: PropsWithChildren<{ voitureid: string }>) {
  const { data, onChange } = useForm({ comment: '' });
  const [commentVoiture] = useMutation(COMMENT_VOITURE, { refetchQueries: [{ query: COMMENTS, variables: { voitureid } }] });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    
    if(data.comment) {
      commentVoiture({ variables: { comment: data.comment, voitureid } }).then(() => {
        onChange({ target: { name: 'comment', value: '' } });
      });
    }
  }, [data, commentVoiture, voitureid]);
  
  return <form onSubmit={onSubmit}>
    <div>
      <label>Votre commentaire:</label>
      <textarea value={data.comment} onChange={onChange} name="comment" />
    </div>
    
    <button>Publier</button>
  </form>
}