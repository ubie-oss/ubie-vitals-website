import { Button } from '@ubie/ubie-ui';
import React, { useCallback, useState } from 'react';

interface Props {
  types: string[];
}

export const TypeList: React.FC<Props> = ({ types }) => {
  const types1 = types.slice(0, 3);
  const types2 = types.slice(3);

  const [showAll, setShowAll] = useState(false);
  const handleClickToggle = useCallback(() => {
    setShowAll(!showAll);
  }, [showAll, setShowAll]);

  return (
    <>
      {types2.length > 0 ? (
        <div>
          {types1.map((type, index) => (
            <div className="typeItem" key={index}>
              <code>{type}</code>
            </div>
          ))}
          <div>
            {showAll &&
              types2.map((type, index) => (
                <div className="typeItem" key={index + types1.length}>
                  <code>{type}</code>
                </div>
              ))}
            <Button variant="text" size="small" onClick={handleClickToggle}>
              {showAll ? 'Close' : 'Show all'}
            </Button>
          </div>
        </div>
      ) : (
        types1.map((type, index) => (
          <div className="typeItem" key={index}>
            <code>{type}</code>
          </div>
        ))
      )}
    </>
  );
};
