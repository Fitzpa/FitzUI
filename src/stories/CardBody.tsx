import z from 'zod';
import cx from 'classnames';

const CardBodySchema = z.object({
  children: z.any(),
});

type CardBodyProps = z.infer<typeof CardBodySchema>;

const CardBody = ({ children }: CardBodyProps) => {
  return <div className="card-content">{children}</div>;
}