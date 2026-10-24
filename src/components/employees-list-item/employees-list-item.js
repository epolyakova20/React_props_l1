import styled from 'styled-components';
import './employees-list-item.css';
const StyledEmployeeItem = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 76px;
    padding: 16px 20px;
    background: #ffffff;
    border-bottom: 1px solid #edf0f5;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        background-color: #f7f9ff;
    }

    .list-group-item-label {
        flex: 1;
        min-width: 0;
        color: #202939;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .list-group-item-label:hover {
        color: #1052ee;
    }

    .employee-salary {
        flex-shrink: 0;
        color: #202939;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
    }

    .employee-star {
        flex-shrink: 0;
        color: #c5cbd5;
        font-size: 18px;
        cursor: pointer;
        transition: color 0.2s ease, transform 0.2s ease;
    }

    .employee-star:hover {
        color: #f4b740;
        transform: scale(1.12);
    }

    .employee-star.active {
        color: #f1f440;
    }

    .btn-cookie,
    .btn-trash {
        border: none;
        border-radius: 8px;
        transition: transform 0.2s ease, background-color 0.2s ease;
    }

    .btn-cookie:hover,
    .btn-trash:hover {
        transform: translateY(-2px);
    }

    .btn-cookie {
        background-color: #fff3d6;
    }

    .btn-trash {
        background-color: #fff0f0;
    }

    &.increase {
        background-color: #fff9e9;
    }

    &.like {
        background-color: #fffdf5;
    }
`;

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }

    if (rise) {
        classNames += ' like';
    }

    return (
        <StyledEmployeeItem className={classNames}>
            <span
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise">
                {name}
            </span>

            <span className="employee-salary"> {salary.toLocaleString('ru-RU')} $</span>

            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <li
                    className={`fas fa-star employee-star ${rise ? 'active' : ''}`}
                    onClick={onToggleProp}
                    data-toggle="rise"
                    role="button"
                    tabIndex={0}
                    aria-label={rise ? 'Убрать из избранного' : 'Добавить в избранное'}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onToggleProp(e);
                        }
                    }}>
                </li>
            </div>
        </StyledEmployeeItem>
    );
}

export default EmployeesListItem;
