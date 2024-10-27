import Accordion from './components/accordion/Accordion';
import SearchableList from './components/SearchableList/SearchableList';
import { PLACES } from './assets/places';
import Place from './components/Place';

function App() {
  return (
    <main>
      <section>
        <h2>Why to work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We work with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure and safe
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList itemKeyFn={item => item.id} items={PLACES}>
          {item => <Place item={item} />}
        </SearchableList>
        <SearchableList itemKeyFn={item => item} items={['item1', 'item2']}>
          {item => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
