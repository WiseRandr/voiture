import { useLazyQuery } from "@apollo/client";
import { PropsWithChildren, useEffect, useMemo } from "react";
import Logo from "src/component/logo/logo";
import { useAuth } from "src/context/auth.context";
import { COMMENTS } from "src/graphql/comment/comment.query";
import CommentForm from "./comment-form/comment-form";

export default function Comments({ voitureid }: PropsWithChildren<{ voitureid: string }>) {
  const { isconnected } = useAuth();
  const [getcomments, { data, loading }] = useLazyQuery(COMMENTS);
  const comments = useMemo<any>(() => data?.comments?.items || [], [data]);

  useEffect(() => {
    if(isconnected && voitureid) getcomments({ variables: { voitureid } });
  }, [isconnected, voitureid, getcomments]);
  
  return <div className="mt-4">
    {loading && <div><Logo loading={true} /></div>}
    {!isconnected && <div>Connectez vous pour voir les commentaires</div>}
    {isconnected && <div>
      <CommentForm voitureid={voitureid} />
      {comments.length === 0 && <div>Pas de commentaire disponible</div>}
      {comments.map((comment: any) => (<div key={comment.id}>
        {comment.comment}
      </div>))}
    </div>}
  </div>;
}