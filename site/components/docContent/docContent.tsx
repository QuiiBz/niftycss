import DocType from '../../types/docs';
import docStyle from './doc-style';

type Props = {
    doc: DocType;
};

const DocContent = ({ doc }: Props) => (
    <div className={docStyle.container}>
        <h1 className={docStyle.title}>{ doc.title }</h1>
        <div
            className={docStyle.content}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: doc.content }}
        />
    </div>
);

export default DocContent;
