import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
import { Theme } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";

export class Lessons extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedTags: [],
			selectedAuthors: []
		};
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<SmallJumbotron
									jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
									containerClass="pl-4  container-fluid"
									headerClass="display-4 font-weight-bold  text-left"
									headerText="Lessons Published"
									pClass="lead  text-left"
									pContent="the following lessons explain different programing
										concepts and have been published by breathe code
										members, search for a partiulars lesson using the
										filters bellow"
								/>
								<div className="row">
									<div className="col-12 border-top border-bottom d-flex justify-content-start ">
										<div className="px-1 py-2">
											<Filter
												label="Tags"
												placeholder="Select one or more tags"
												onChange={d =>
													this.setState({
														selectedTags: d
													})
												}
												options={actions
													.filterTags(store.tags)
													.map((tag, index) => {
														return {
															label: tag,
															value: tag
														};
													})}
											/>
										</div>
										<div className="px-1 pl-1 py-2">
											<Filter
												label="Author"
												placeholder="Author:"
												onChange={d =>
													this.setState({
														selectedTags: d
													})
												}
												options={actions
													.filterTags(store.authors)
													.map(author => {
														return {
															label: author,
															value: author
														};
													})}
												withToggler={false}
											/>
										</div>

										<div className="px-1 py-2">
											<Filter
												label="Tags"
												placeholder="Search My Name"
												onChange={d => console.log(d)}
												options={[
													{
														label: "html",
														value: "html"
													},
													{
														label: "react.js",
														value: "react.js"
													},
													{
														label: "javascript",
														value: "javascript"
													}
												]}
											/>
										</div>
									</div>
								</div>

								{store.lessons
									.filter(l => {
										if (this.state.selectedTags.length == 0)
											return true;
										for (
											let i = 0;
											i < this.state.selectedTags.length;
											i++
										) {
											if (
												l.tags.includes(
													this.state.selectedTags[i]
												)
											)
												return true;
										}
										return false;
									})
									.map((lesson, index) => {
										return (
											<div key={index}>
												<div className="row">
													<div className="col-12 px-5 py-3">
														<div className="pl-3">
															<a
																className="h2 text-dark btn-default"
																href={actions.lessonUrl(
																	lesson.slug
																)}>
																{lesson.title}
															</a>
															<p className="lead mt-2">
																{
																	lesson.subtitle
																}
															</p>
															<div className="row pl-2">
																{lesson.tags.map(
																	(
																		tag,
																		index
																	) => {
																		return (
																			<div
																				key={
																					index
																				}
																				className="col-1.5 px-2 mx-1 rounded tagsCol3">
																				{
																					tag
																				}
																			</div>
																		);
																	}
																)}
															</div>
														</div>
													</div>
												</div>
												<hr className="my-4 mx-5" />
											</div>
										);
									})}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
