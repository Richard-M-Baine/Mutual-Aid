from flask_wtf import FlaskForm
from wtforms.fields import StringField, TextAreaField, IntegerField, BooleanField, SubmitField, DateTimeField, SelectField
from wtforms.validators import DataRequired



class NewRequest(FlaskForm):

    start_time = DateTimeField('start_time', validators=[DataRequired()])
    end_time = DateTimeField('end_time', validators=[DataRequired()])
    details = TextAreaField('details', validators=[DataRequired()])