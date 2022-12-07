//Components

import {GrFormNext, GrFormPrevious} from 'react-icons/gr';


import './App.css';

function App() {

	return (
		<div className="app">
			<div className="header">
				<h2>Deixe sua avaliação</h2>
				<p>
					Ficamos muito felizes com sua compra, utilize o formulário abaixo para avaliar o produto
				</p>
			</div>

			<div className="form-container">
				<p>etapas</p>
				<form>
					<div className="input-container">
						
					</div>
					<div className="actions">
						<button type="button">
							<GrFormPrevious/>
							<span>
								Voltar
							</span>
						</button>
						<button type="submit">
							<span>
								Avançar
							</span>
							<GrFormNext/>
						</button>
					</div>

				</form>
			</div>
		</div>
	)
}

export default App
