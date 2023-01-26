import z from 'zod';
import cx from 'classnames';

const TextSchema = z.object({
  children: z.any(),
  classnames: z.string(),
});

type TextProps = z.infer<typeof TextSchema>;

const Text = ({ children, classnames }: TextProps) => {
  return <p className={cx('text', classnames)}>{children}</p>;
}

export default Text;
