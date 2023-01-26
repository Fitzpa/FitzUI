import z from 'zod';

const CardSchema = z.object({
  title: z.string(),
  children: z.any(),
});

type CardProps = z.infer<typeof CardSchema>;

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;