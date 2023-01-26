import z from 'zod';
import cx from 'classnames';

const TitleSchema = z.object({
  level: z.number().min(1).max(6),
  classnames: z.string(),
  children: z.any(),
});

type TitleProps = z.infer<typeof TitleSchema>;

/**
 * Title component to display either an h1, h2, h3, h4, h5, h6 tag based on the level prop
*/
const Title = ({ level, classnames, children }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={cx('title', classnames)}>
      {children}
    </Tag>
  );
}

export default Title;