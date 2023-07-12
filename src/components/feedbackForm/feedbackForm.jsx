import { FeedbackModalWrapper } from '../addFeedbackModal/addFeedbackModal';
import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  Rating,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import Sprite from 'icons/sprite.svg';
import { useResponse } from 'hooks/useResponse';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  updateReview,
  deleteReview,
} from '../../redux/reviews/operations';
import { selectUserReview } from '../../redux/reviews/selectors';
import { selectUser } from '../../redux/auth/selectors';
import Notiflix from 'notiflix';

export const FeedbackForm = ({
  feedbackModalOpen,
  handleModalToggle,
  mode,
}) => {
  const { isTablet, isDesktop } = useResponse();

  const [newReview, setNewReview] = useState(true);
  const [editingReview, setEditingReview] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);

  const [ratingValue, setRatingValue] = useState(0);
  const [commentValue, setCommentValue] = useState('');

  const review = useSelector(selectUserReview);
  const { id } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (review) {
      setRatingValue(review.rating);
      setCommentValue(review.comment);
      setNewReview(false);
      setEditingReview(false);
      setInputDisable(true);
    }
  }, [review]);

  const handleSubmit = values => {
    values.rating = ratingValue;
    values.comment = commentValue;

    if (!values.rating || !values.comment) {
      Notiflix.Notify.failure('All fields should be filled!');
      return;
    }

    if (values.comment.length < 2) {
      Notiflix.Notify.failure('Comment should be at least 2 characters!');
      return;
    }

    if (values.comment.length > 300) {
      Notiflix.Notify.failure('Comment should be maximum 300 characters!');
      return;
    }

    if (newReview) {
      dispatch(addReview({ rating: values.rating, comment: values.comment }));
    } else {
      dispatch(
        updateReview({ id: id, rating: values.rating, comment: values.comment })
      );
    }

    setNewReview(false);
    setEditingReview(false);
    setInputDisable(true);
  };

  const onCancel = () => {
    if (newReview) {
      setRatingValue(0);
      setCommentValue('');
    } else {
      setEditingReview(false);
      setInputDisable(true);
    }
  };

  return (
    <FeedbackModalWrapper
      open={feedbackModalOpen}
      onClose={handleModalToggle}
      mode={mode}
    >
      <Formik initialValues={{ rating: ratingValue, comment: commentValue }}>
        <Form>
          <label
            style={{
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
              marginBottom: `${isTablet || isDesktop ? '24px' : '20px'}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: { xs: '12px' },
                color:
                  mode !== 'dark'
                    ? 'rgba(250, 250, 250, 0.3)'
                    : 'rgba(52, 52, 52, 0.8)',
                lineHeight: 1.167,
              }}
            >
              Rating
            </Typography>
            <Rating
              name="rating"
              value={ratingValue}
              disabled={inputDisable}
              onChange={(_, newValue) => {
                setRatingValue(newValue);
              }}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#FFAC33',
                },
                '& .MuiRating-iconEmpty': {
                  color: mode !== 'dark' && '#353647',
                },
              }}
            />
          </label>

          <label
            style={{
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: '12px' },
                  color:
                    mode !== 'dark'
                      ? 'rgba(250, 250, 250, 0.3)'
                      : 'rgba(52, 52, 52, 0.8)',
                  lineHeight: 1.167,
                }}
              >
                Review
              </Typography>

              {!newReview && (
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <IconButton
                    onClick={() => {
                      setEditingReview(true);
                      setInputDisable(false);
                    }}
                    sx={{
                      p: '10px',
                      backgroundColor: mode !== 'dark' ? '#353647' : '#E3F3FF',
                      color: '#3E85F3',
                      '&.active, &:hover, &:focus': {
                        backgroundColor: '#3E85F3',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <SvgIcon
                      stroke="currentColor"
                      sx={{
                        fill: 'none',
                        width: '16px',
                        height: '16px',
                      }}
                    >
                      <use href={`${Sprite}#pencil`}></use>
                    </SvgIcon>
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      dispatch(deleteReview(id));
                      setNewReview(true);
                      setInputDisable(false);
                      setRatingValue(0);
                      setCommentValue('');
                      setEditingReview(false);
                    }}
                    sx={{
                      p: '10px',
                      backgroundColor: 'rgba(234, 61, 101, 0.2)',
                      color: '#EA3D65',
                      '&:hover, &:focus': {
                        backgroundColor: '#EA3D65',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <SvgIcon
                      stroke="currentColor"
                      sx={{
                        fill: 'none',
                        width: '16px',
                        height: '16px',
                      }}
                    >
                      <use href={`${Sprite}#trash`}></use>
                    </SvgIcon>
                  </IconButton>
                </Box>
              )}
            </Box>

            <Field
              as={OutlinedInput}
              type="text"
              name="comment"
              onChange={e => {
                setCommentValue(e.target.value);
              }}
              value={commentValue}
              placeholder="Enter text"
              disabled={inputDisable}
              multiline
              rows={5}
              sx={{
                border:
                  mode !== 'dark' && '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: mode !== 'dark' ? '#171820' : '#F6F6F6',
                color: mode !== 'dark' ? '#FFFFFF' : '#343434',
                fontFamily: 'Inter, sans-serif',
                minWidth: { xs: '295px', md: '404px' },
                borderRadius: '8px',
                fontSize: '14px',
                lineHeight: 1.286,
                fontWeight: 600,
                p: { xs: '12px 14px', md: '14px 18px' },
              }}
            />
          </label>

          {(newReview || editingReview) && (
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                mt: { xs: '14px', md: '18px' },
              }}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  width: '100%',

                  padding: { xs: '8px 20px', md: '15px 85px' },
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.286,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#2B78EF',
                    boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
                  },
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                {newReview ? 'Save' : 'Edit'}
              </Button>

              <Button
                onClick={onCancel}
                sx={{
                  textTransform: 'none',
                  backgroundColor: mode !== 'dark' ? '#21222C' : '#E5EDFA',
                  color: mode !== 'dark' ? '#FFFFFF' : '#343434',
                  padding: { xs: '8px 20px', md: '15px 85px' },
                  width: '100%',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.286,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Form>
      </Formik>
    </FeedbackModalWrapper>
  );
};
