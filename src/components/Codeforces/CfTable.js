/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CfTable extends Component {
  render() {
    const { contestList, cfTotal, userData } = this.props;
    const { searchCategory, search, filter } = this.props;
    let index = 0;
    let problems = 0;
    let attemptedContest = 0;
    let completedContest = 0;
    let solvedProblems = 0;

    return (
      <div className="py-4" id="cf-table">
        <div className="row mx-0">
          <div className="col-md-12 px-1 order-2">
            <table className="table table-bordered table-hover rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Contest Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Solved</th>
                  <th scope="col">Unsolved</th>
                </tr>
              </thead>
              <tbody>
                {contestList.map((contest) => {
                  const { id, name } = contest;
                  let isAttempted = userData[id] ? !!Object.keys(userData[id]).length : false;
                  isAttempted = isAttempted ? '1' : '0';
                  const show = !filter || isAttempted === filter;
                  if (show && name.indexOf(searchCategory) !== -1 && name.indexOf(search) !== -1) {
                    const contestLink = `https://codeforces.com/contest/${id}`;
                    const date = new Date(contest.startTimeSeconds * 1000).toDateString().split(' ').slice(1).join(' ');
                    const total = cfTotal[id] || [];
                    const solved = userData[id] ? Object.keys(userData[id]).sort() : [];
                    const unSolved = total.filter((item) => !solved.includes(item));
                    const completed = total.length && !unSolved.length;
                    const contestName = name;

                    let unSolvedString = completed && 'Completed';
                    unSolvedString = !total.length ? 'No Data' : unSolvedString;
                    unSolvedString = contest.phase === 'BEFORE' ? 'Upcoming' : unSolvedString;

                    index += 1;
                    problems += total.length;
                    if (solved.length) {
                      attemptedContest += 1;
                      solvedProblems += solved.length;
                    }
                    if (completed) completedContest += 1;

                    return (
                      <tr key={id} className="align-middle">
                        <td>{index}</td>
                        <td>
                          <a rel="noopener noreferrer" target="_blank" href={contestLink}>
                            {contestName}
                          </a>
                        </td>
                        <td>{date}</td>
                        <td className={`${solved.length ? 'bg-solved text-white' : ''}`}>
                          {solved.length
                            ? solved.map((question) => (
                                <a
                                  key={question}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  href={`${contestLink}/problem/${question}`}
                                >
                                  <i className="fas fa-check-circle" /> {`${question} `}
                                </a>
                              ))
                            : '-'}
                        </td>
                        <td
                          className={`${
                            completed
                              ? 'bg-completed text-white'
                              : solved.length
                              ? 'bg-unsolved text-white'
                              : 'bg-notattempted'
                          }`}
                        >
                          {completed ? <i className="fas fa-check-circle mr-2" /> : null}
                          {unSolvedString ||
                            unSolved.map((question) => (
                              <a
                                key={question}
                                rel="noopener noreferrer"
                                target="_blank"
                                href={`${contestLink}/problem/${question}`}
                              >
                                <i className="fas fa-pen-square" />
                                {`${question} `}
                              </a>
                            ))}
                        </td>
                      </tr>
                    );
                  }
                  return <React.Fragment key={id} />;
                })}
              </tbody>
            </table>
          </div>

          <div className="col-md-12 px-1 order-1">
            <div className="alert alert-info py-3">
              <div className="row mx-0">
                <div className="col-md col-auto">
                  <h6>Contest</h6>
                  <span className="text-success">
                    <strong>{attemptedContest}</strong>
                  </span>{' '}
                  / <strong>{index}</strong>
                </div>
                <div className="col-md col-auto">
                  <h6>Questions</h6>
                  <span className="text-success">
                    <strong>{solvedProblems}</strong>
                  </span>{' '}
                  / <strong> {problems}</strong>
                </div>
                <div className="col-md col-auto">
                  <h6>Completed</h6>
                  <span className="text-success">
                    <strong>{completedContest}</strong>
                  </span>{' '}
                  / <strong>{index}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cfTotal: (state.codeforces && state.codeforces.cfTotal) || {},
  userData: (state.cfUsers && state.cfUsers.userData) || {},
});

export default connect(mapStateToProps)(CfTable);
