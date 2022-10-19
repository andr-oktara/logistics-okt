import Typography from '@mui/material/Typography';

type TitleProps = {
    title: string;
}

export default function PageTitle(props: TitleProps) {
    return (
        <Typography variant="h4" gutterBottom marginTop={10} paddingBottom={5}>
            {props.title}
        </Typography>
    )
}