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
    {!isconnected && <div className="text-center">Connectez vous pour voir les commentaires</div>}
    {isconnected && <div className="d-flex">
      <div className="mx-3"><CommentForm voitureid={voitureid} /></div>
      {comments.length === 0 && <div className="text-center flex-grow-1">Pas de commentaire disponible</div>}
      <div className="flex-grow-1 my-4 mx-3">
        {comments.map((comment: any) => (<div key={comment.id} className="d-flex justify-content-between mb-4 border-bottom">
          <div>{comment.userid}</div>
          <div className="flex-grow-1 mx-4">{comment.comment}</div>
          <div>{new Date(parseInt(comment.createdAt)).toString()}</div>
        </div>))}
      </div>
    </div>}
  </div>;
}