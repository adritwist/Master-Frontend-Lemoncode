import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character: character } = props;

  return (
    <Card>
      <CardHeader
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            <b>Género:</b> {character.gender}<br />
            <b>Especie:</b> {character.species}<br />
            <b>Tipo:</b> {character.type}<br />
            <b>Creado:</b> {character.created}<br />
            <b>URL:</b> {character.url}<br />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
