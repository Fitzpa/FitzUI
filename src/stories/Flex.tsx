import z from 'zod';
import cx from 'classnames';

const FlexSchema = z.object({
  children: z.any(),
  classnames: z.string().optional,
  direction: z.string().optional.default('row'),
  justify: z.string().optional.default('center'),
  align: z.string().optional.default('center'),
  wrap: z.string().optional.default('wrap'),
});

type FlexProps = z.infer<typeof FlexSchema>;

const Flex = ({
  children,
  classnames,
  direction,
  justify,
  align,
  wrap,
}: FlexProps) => {

  return (
    <div
      className={cx('flex', {
        classnames: classnames,
        'flex-row': direction === 'row',
        'flex-column': direction === 'column',
        'justify-center': justify === 'center',
        'justify-start': justify === 'start',
        'justify-end': justify === 'end',
        'justify-between': justify === 'between',
        'justify-around': justify === 'around',
        'justify-evenly': justify === 'evenly',
        'align-center': align === 'center',
        'align-start': align === 'start',
        'align-end': align === 'end',
        'align-baseline': align === 'baseline',
        'align-stretch': align === 'stretch',
        'wrap': wrap === 'wrap',
        'nowrap': wrap === 'nowrap',
        'wrap-reverse': wrap === 'wrap-reverse',
      })}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
}

export default Flex;

